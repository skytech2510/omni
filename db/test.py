import requests
from bs4 import BeautifulSoup
import json
from time import sleep
import csv

url = 'https://www.gov.br/cultura/pt-br/assuntos/editais/inscricoes-abertas'

response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')
# while true:
#     sub_urls = soup.find(id='content').find_all('a')
#     for sub_url in sub_urls:
#         print(sub_url['href'])
#     sleep(100)
# print(sub_url['href'] for sub_url in sub_urls)
# with open('test.txt', 'w', encoding='utf-8') as file:
#     file.write(response.text)
data=[]
sub_urls = soup.find(id='content').find_all('a')
for sub_url in sub_urls:
    # print(sub_url['href']
    opportunity = {}
    url_edital = sub_url['href']
    content = requests.get(url_edital)
    soup = BeautifulSoup(content.content, 'html.parser')
    opportunity['title'] = soup.find(id='content').find('h1').text
    byline = soup.find(id="content").find(id="viewlet-above-content-body").find(id="plone-document-byline")
    if byline:
        published = byline.find(class_="documentPublished")
        updated = byline.find(class_="documentModified")
        
        opportunity['published'] = published.find_all("span")[1].text
        opportunity['updated'] = updated.find_all("span")[1].text
    else:
        opportunity['published'] = 'N/A'
        opportunity['updated'] = 'N/A'
    opportunity["social_links"]=[]
    social_links = soup.find(id='content').find(class_="social-links").find_all("a")
    for social_link in social_links:
        opportunity["social_links"].append({"title": social_link["title"], "href": social_link["href"]})
    opportunity['info']=opportunity['info'] = ' '.join(str(child) for child in soup.find(id='content').find(id="parent-fieldname-text").children)
    opportunity["support_files"]=[]
    support_files = soup.find(id='content').find(id="parent-fieldname-text").find_all(class_="internal-link")
    for support_file in support_files:
        opportunity["support_files"].append({"url":support_file["href"], "filename":support_file.text, "type": "pdf" if support_file["data-tippreview-enabled"] == "true" else "docx"})
    # opportunity['info']=[]
    # info_supports_soup = soup.find(id='content').find(id="parent-fieldname-text").find_all('strong')
    # info_supports_soup.pop(0)
    # for info_support_soup in info_supports_soup:
    #     info = {}
    #     info["title"] = info_support_soup.get_text().strip()
    #     content = []
    #     content.append(info_support_soup.find_parent("p").get_text().replace(info_support_soup.get_text(), '').strip())
    #     for sibling in info_support_soup.find_parent("p").find_all_next("p"):
    #         if sibling.find('strong'):
    #            break
    #         content.append(str(sibling))
    #     info["content"] = '<br>'.join(content)
    #     # if info_support_soup.find('strong'):
    #     #     info["title"] = info_support_soup.find('strong').get_text()
    #     # else:
    #     #     info["title"] = ""
    #     # info["content"] = info_support_soup.get_text().replace(info["title"], '').strip()
    #     opportunity['info'].append(info)
    data.append(opportunity)
with open('data.json', 'w', encoding='utf-8') as file:
    json.dump(data, file, ensure_ascii=False, indent=4)
    