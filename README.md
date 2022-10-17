# nerdhub
![nerdhub](https://user-images.githubusercontent.com/7490790/195183371-ed95f8c0-f20c-4e8a-8739-875d5ce72ee3.png)

Nerdhub was a work-in-progress full-stack social media iOS application for retrieving the latest web articles of your favorite personalities. At the time of discontinuation, the following had been built out:
- React Native Designed and functioning iOS application
- Authentication via AWS Cognito
- Backend storage in AWS RDS (Postgres)
- Several AWS Lambdas for retrieving news articles from various web sources and processing
- Sentiment Analysis & NLP via AWS Comprehend
- GraphQL server for interfacing with Apollo on the frontend and Postgres on the backend hosted on AWS EC2.

I handled the majority of the backend work involved with the project.

The project was scrapped for lack of business viability but it lives on as an example of a proof-of-concept development application.

<h1><Application Screenshots</h1>
<h2>Post</h2>
<img src="https://user-images.githubusercontent.com/7490790/196258088-2fe02492-d9d0-4c2c-9c2c-b72ba285e495.png" width="275" height="600">

<h2>Feed</h2>
<img src="https://user-images.githubusercontent.com/7490790/196258193-78aa521e-c8fc-4318-82ee-e3c48a977fcf.png" width="275" height="600">


<h2>Instructions</h2>

<p> This assumes you have Xcode and an iphone simulator working on your device. </p>
<p>1. Clone the repository into a new empty "nerdhub" folder (let me know if you need assistance).<p>
<p>2. Open up your terminal. Navigate to the nerdhub folder</p>  
<p>3. CD to nerdhub, run npm install</p>
<p>4. CD to ios, run pod install </p>
<p>5. Open the xcode workspace file (with xcode) within the ios folder</p>
<p>6. Press the build button in xcode </p>
