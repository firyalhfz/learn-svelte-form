export const load = ()=> {
    const newsAPIKey = 'your_news_api_key';
    console.log(newsAPIKey);

    const news = [
        {id: 1, title: 'News 1'},
        {id: 2, title: 'News 2'},
        {id: 3, title: 'News 3'}
    ]
    return {news}
}