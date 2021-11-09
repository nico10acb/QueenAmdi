FROM fusuf/whatsasena:latest

RUN git clone https://github.com/nico10acb/QueenAmdi /root/QueenAmdi
WORKDIR /root/QueenAmdi/
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
