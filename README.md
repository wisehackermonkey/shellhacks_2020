# shellhacks 2020
```
our hackathon project for shellhacks 2020
Created by 
Oran C
Mythili
Peter
Vamsi
```
[![GitHub issues](https://img.shields.io/github/issues/wisehackermonkey/shellhacks_2020)](https://github.com/wisehackermonkey/shellhacks_2020/issues) [![GitHub stars](https://img.shields.io/github/stars/wisehackermonkey/shellhacks_2020)](https://github.com/wisehackermonkey/shellhacks_2020/stargazers)[![GitHub license](https://img.shields.io/github/license/wisehackermonkey/shellhacks_2020)](https://github.com/wisehackermonkey/shellhacks_2020/blob/master/LICENSE)
![unknown](/assets/unknown.png)
# Description
# install

### Docker setup
```bash
docker build -t wisehackermonkey/mindmaper:latest .
docker run -it --rm -p 3000:80 --name mindmaper wisehackermonkey/mindmaper:latest
```
##### Deploy on gcp
```bash
sudo docker run -d --restart=always -p 3000:80 --network=host --name mindmaper wisehackermonkey/mindmaper:latest

docker run -d --name website --restart=always --network=host mindmaper 
```
# Links
