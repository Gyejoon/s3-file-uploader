# s3-file-uploader
AWS S3에 Assets 파일을 업로드 할 때 간편하게 업로드

## DockerHub를 활용한 웹서버 실행
```
docker pull gyejoongq/s3-file-uploader:latest
docker run -dit -p 3000:3000 s3-file-uploader:latest
```

## 모듈 설치
```
yarn install
```

## 로컬 서버 실행
```
yarn dev
```

## 도커 빌드
```
docker build -t s3-file-uploader:latest .
```

## 도커 실행
```
docker run -dit -p 3000:3000 s3-file-uploader:latest
```