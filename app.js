// Реализовать класс, описывающий новостную ленту.
// 	Класс должен содержать:
// 	■ массив новостей; объект с тайтлом, текстом и так далее.
// ■ get-свойство, которое возвращает количество новостей;
// ■ метод для вывода на экран всех новостей;
// ■ метод для добавления новости;
// ■ метод для удаления новости;


class NewsLines{
    constructor(title, text, newsArray){
        this.title = title
        this.text = text
        this.newsArray = newsArray
    }

    printNews(){
        document.write(
            `<div class="block-news">
                <h4 class="news-title">${this.title}</h4>
                <div class="main-text">${this.text}</div>
            </div>`
        )
    }

    getnewsCount(newsArray){
        console.log(`News in the line: ${newsArray.length}`)
    }
    printAllNews(newsArray){
        newsArray.forEach((news) => {
            news.printNews()
        });
    }
    addNews(newsArray, news){
        newsArray.push(news)
    }
    removeNews(newsArray,news){
        newsArray.pop(news)
    }

}
let newsArray = []
const news1 = new NewsLines('Covid19', 'Lorem Ipsum dolor')
const news2 = new NewsLines('Covid20', 'Loremsddnkjbdhjbjkjhbfd')
//let newsArray = new NewsLines(newsArray)
//news1.printNews()
news1.addNews(newsArray, news1)
news2.addNews(newsArray,news2)
news2.addNews(newsArray, news2)
news2.getnewsCount(newsArray)
news1.removeNews(newsArray, news1)
news2.getnewsCount(newsArray)
news2.printAllNews(newsArray)