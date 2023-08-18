생활 코딩 NextJs 강좌 클론 코딩

사용되고 있는 기술

1. router
2. 게시글 CRUD
3. useParam
4. SSR, CSR
5. 환경변수 설정


## 서버 기동

처음으로, 개발서버를 기동한다:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

 [http://localhost:3000](http://localhost:3000) 
 브라우저에서 위 url로 접속한다.

`app/page.js` 페이지를 수정할 때마다. 페이지가 자동으로 update 되는 것을
확인 할 수 있습니다.




## 추가 정보

API 서버 구현은 로컬에서 간편하게 구동할 수 있도록 json-server 로 구현되어 있습니다.

터미널을 추가로 띄우고 아래와 같이 입력해 줍니다.

```bash
npx json-server --port 9999 --watch db.json

```

 [http://localhost:9999/posts](http://localhost:9999/posts) 
 
 브라우져에서 위 url 접속하게 되면, api 응답이 오는 것을 확인할 수 있습니다.

db.json 파일에 게시글에 대한 데이터를 수정하여 확인이 가능합니다.

Next.js 에 대해 궁금한 사항이 있으면 아래 링크의 문서를 확인하기 바랍니다.

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
