FROM scratch

WORKDIR  /src

COPY . .

RUN npm install

RUN npm run dev

EXPOSE 5431

CMD ["App.jsx"]
