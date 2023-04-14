import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = 
[
    {
        "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
        },
        "author": "John Wagner",
        "title": "Biden says leak investigation is 'getting close,' downplays consequences - The Washington Post",
        "description": "“There is a full-blown investigation going on, as you know, with the intelligence community and the Justice Department, and they’re getting close,\" Biden told reporters in Dublin.",
        "url": "https://www.washingtonpost.com/politics/2023/04/13/biden-leak-investigation-getting-close/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/04-13-2023/t_60d40c910985495b8f9ec8059988c8db_name_ARKMYF2RE6V6BHJKSTUAKWVUAQ.jpg&w=1440",
        "publishedAt": "2023-04-13T16:11:00Z",
        "content": "Comment on this story\r\nComment\r\nPresident Biden said Thursday that an investigation into the leak of a massive trove of classified U.S. military documents is getting close to a resolution and downpla… [+2941 chars]"
    },
    {
        "source": {
            "id": "ign",
            "name": "IGN"
        },
        "author": "Ryan Dinsdale",
        "title": "EA Originals' 'First Person Magic Shooter' Immortals of Aveum Arrives This July - IGN",
        "description": "EA Originals' upcoming \"first person magic shooter\" Immortals of Aveum launches this July for PlayStation 5, Xbox Series X and S, and PC via the EA App, Steam, and Epic Games Store.",
        "url": "https://www.ign.com/articles/ea-originals-first-person-magic-shooter-immortals-of-aveum-arrives-this-july",
        "urlToImage": "https://assets-prd.ignimgs.com/2023/04/13/ioa-tga-screen3-1681383652040.png?width=1280",
        "publishedAt": "2023-04-13T16:00:26Z",
        "content": "EA Originals' upcoming \"first person magic shooter\" Immortals of Aveum launches on July 20, 2023 for PlayStation 5, Xbox Series X and S, and PC via the EA App, Steam, and Epic Games Store.\r\nImmortals… [+2811 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Anna Bahney",
        "title": "Mortgage rates drop for fifth week in a row - CNN",
        "description": "Homebuyers are embracing mortgage rates dipping closer and closer to 6%. Rates fell for the fifth week in a row as inflation continues to ease.",
        "url": "https://www.cnn.com/2023/04/13/homes/mortgage-rates-april-13/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221207164321-single-family-homes-colorado-file-restricted-101022.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-04-13T16:00:00Z",
        "content": "Homebuyers are embracing mortgage rates dipping closer and closer to 6%. Rates fell for the fifth week in a row as inflation continues to ease.\r\nThe 30-year fixed-rate mortgage averaged 6.27% in the … [+3635 chars]"
    },
    {
        "source": {
            "id": "abc-news",
            "name": "ABC News"
        },
        "author": "Emily Shapiro",
        "title": "Drake Bell, former Nickelodeon star, reported missing in Florida - ABC News",
        "description": "The 36-year-old may have last been seen near a school.",
        "url": "https://abcnews.go.com/US/drake-bell-former-nickelodeon-star-reported-missing-florida/story?id=98558676",
        "urlToImage": "https://s.abcnews.com/images/US/drake-bell-gty-ps-230413_1681399247166_hpMain_16x9_992.jpg",
        "publishedAt": "2023-04-13T15:37:47Z",
        "content": "Authorities in Daytona Beach, Florida, are searching for former Nickelodeon star Drake Bell who they say \"is considered missing and endangered.\"\r\nThe 36-year-old, whose legal name is Jared Bell, may … [+651 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The Athletic"
        },
        "author": "The Athletic Staff, Darnell Mayberry",
        "title": "DeMar DeRozan’s daughter Diar goes ‘viral’ after Raptors miss 18 free throws in Play-In - The Athletic",
        "description": "The Raptors missed 18 of their 36 free-throw attempts against the Bulls in the Play-In.",
        "url": "https://theathletic.com/4407078/2023/04/12/demar-derozan-diar-raptors-free-throws/",
        "urlToImage": "https://cdn.theathletic.com/app/uploads/2023/04/12223747/gettyimages-1251764209-594x594-1.jpg",
        "publishedAt": "2023-04-13T15:16:29Z",
        "content": "After the Chicago Bulls 109-105 win over the Toronto Raptors in the NBA Play-In Tournament, DeMar DeRozan praised his daughter Diar and her free-throw defense.\r\nShe went viral, DeRozan said after the… [+1842 chars]"
    },
    {
        "source": {
            "id": "fox-news",
            "name": "Fox News"
        },
        "author": "Michael Ruiz",
        "title": "San Francisco police arrest man in Cash App founder Bob Lee stabbing death: report - Fox News",
        "description": "San Francisco police have reportedly arrested a man in connection with last week's stabbing death of Cash App founder Bob Lee in the Rincon Hill neighborhood.",
        "url": "https://www.foxnews.com/us/san-francisco-police-arrest-man-cash-app-founder-bob-lee-stabbing-death-report",
        "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/04/boblee.png",
        "publishedAt": "2023-04-13T15:15:00Z",
        "content": "San Francisco police have arrested a Bay Area man in connection with last week's stabbing death of tech titan and Cash App founder Bob Lee, according to local reports.\r\nLee was found dead with stab w… [+1847 chars]"
    },
    {
        "source": {
            "id": "engadget",
            "name": "Engadget"
        },
        "author": "https://www.engadget.com/about/editors/jon-fingas",
        "title": "New 'Legend of Zelda: Tears of the Kingdom' trailer shows Link's allies | Engadget - Engadget",
        "description": "A final trailer for 'Tears of the Kingdom' shows  Link's friends, the villain...",
        "url": "https://www.engadget.com/new-legend-of-zelda-tears-of-the-kingdom-trailer-shows-links-allies-144943398.html",
        "urlToImage": "https://s.yimg.com/uu/api/res/1.2/vuxaYwVwbQVNBSXIxHFffQ--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-04/ded40810-da06-11ed-873e-4039570aca71.cf.jpg",
        "publishedAt": "2023-04-13T14:52:22Z",
        "content": "Nintendo has shared one last trailer before The Legend of Zelda: Tears of the Kingdom arrives on May 12th, and this one is worth watching if you're looking for some insight into the story. The rather… [+1347 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "Bulls vs. Raptors reaction, discussing Zion's health & Vince Carter talks playoffs! | KJM - ESPN",
        "description": "Bulls vs. Raptors reaction, discussing Zion's health & Vince Carter talks playoffs! | KJMThe KJM crew discuss the Bulls' 109-105 win over the Raptors, Zion W...",
        "url": "https://www.youtube.com/watch?v=5wVpIE65sOA",
        "urlToImage": "https://i.ytimg.com/vi/5wVpIE65sOA/maxresdefault.jpg",
        "publishedAt": "2023-04-13T14:17:50Z",
        "content": null
    },
    {
        "source": {
            "id": "reuters",
            "name": "Reuters"
        },
        "author": null,
        "title": "Ghana first to approve Oxford's malaria vaccine - Reuters",
        "description": "Ghana has become the first country in the world to approve a new malaria vaccine from Oxford University, a potential step forward in fighting a disease that kills hundreds of thousands of children each year.",
        "url": "https://www.reuters.com/business/healthcare-pharmaceuticals/ghana-first-approve-oxfords-malaria-vaccine-2023-04-12/",
        "urlToImage": "https://www.reuters.com/resizer/wyfr_C-BDcodBA4rowBuI49JcEY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/XD6GOSUDBBKVNJVQYUEJGEVCKI.jpg",
        "publishedAt": "2023-04-13T14:09:00Z",
        "content": "LONDON, April 13 (Reuters) - Ghana has become the first country in the world to approve a new malaria vaccine from Oxford University, a potential step forward in fighting a disease that kills hundred… [+3520 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Deadline"
        },
        "author": "Nancy Tartaglione",
        "title": "Cannes Lineup Analysis: 76th Fest Promises Heady Mix Of Auteurs, Newcomers & Glamour - Deadline",
        "description": "In total, Cannes Film Festival General Delegate Thierry Frémaux today announced 52 titles that will debut at the 76th edition, which runs May 16-27 on the Riviera, and which he dedicated to the lat…",
        "url": "https://deadline.com/2023/04/cannes-festival-2023-lineup-analysis-1235324048/",
        "urlToImage": "https://deadline.com/wp-content/uploads/2023/04/GettyImages-87145004.jpg?w=1024",
        "publishedAt": "2023-04-13T14:04:00Z",
        "content": "In total, Cannes Film Festival General Delegate Thierry Frémaux today announced 52 titles that will debut at the 76th edition, which runs May 16-27 on the Riviera, and which he dedicated to the late … [+4179 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Chicago Tribune"
        },
        "author": "Jake Sheridan, Nell Salzman",
        "title": "3 teens shot, including 1 fatally, prompts Evanston Northwestern University 'shelter in place' - Chicago Tribune",
        "description": "Police said the shooting was not related to the university and that there didn't appear to be a continued threat.",
        "url": "https://www.chicagotribune.com/news/breaking/ct-northwestern-evanston-clark-shooting-lockdown-20230413-pbx3zkrbl5efznqpy7hqeznwza-story.html",
        "urlToImage": "https://www.chicagotribune.com/resizer/mnYSVPCDkNXOSQx98B2AKEO1p5g=/1200x630/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/tronc/RDKL4DTC65DSNBWETFQL6BWKZU.jpg",
        "publishedAt": "2023-04-13T13:47:50Z",
        "content": "An 18-year-old man was pronounced dead on Thursday morning after being shot in the Evanston neighborhood.\r\nThe man has been identified as Jacquis Irby, of 8500 block of Niles Center Rd. in Skokie.\r\nT… [+2393 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "SciTechDaily"
        },
        "author": null,
        "title": "The Webb of Life: Exploring New Star Formation and the Universe's Ancient Secrets - SciTechDaily",
        "description": "NASA's James Webb Space Telescope observed the Hubble Ultra Deep Field, providing high-resolution images and valuable data on the early universe's galaxies. This information aids in understanding galaxy reionization and was made public for diverse analysis an…",
        "url": "https://scitechdaily.com/the-webb-of-life-exploring-new-star-formation-and-the-universes-ancient-secrets/",
        "urlToImage": "https://scitechdaily.com/images/Webb-Telescope-in-Space.jpg",
        "publishedAt": "2023-04-13T13:46:53Z",
        "content": "ByNASAApril 13, 2023\r\nIn October 2022, NASAs James Webb Space Telescope observed the Hubble Ultra Deep Field for over 20 hours, focusing on wavelengths between 2 and 4 microns. The research team, inc… [+11665 chars]"
    },
    {
        "source": {
            "id": "the-verge",
            "name": "The Verge"
        },
        "author": "Jess Weatherbed",
        "title": "Adobe expands Frame.io video platform to support image and PDF files - The Verge",
        "description": "Adobe has announced a new text-based video editing feature for Premier Pro and expanded its Frame.io cloud-based video collaboration platform to include photos and PDF documents.",
        "url": "https://www.theverge.com/2023/4/13/23681495/adobe-frameio-premiere-pro-new-features-editing",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/l57SzbjbbOq1xDU2D6v0GGKtFQo=/219x211:2639x1799/1200x628/filters:focal(1404x944:1405x945)/cdn.vox-cdn.com/uploads/chorus_asset/file/24582256/Frameio_MarketingTeams_Creatives.jpg",
        "publishedAt": "2023-04-13T13:00:00Z",
        "content": "Adobe announces new collaboration and editing features for Frame.io and Premiere Pro\r\nAdobe announces new collaboration and editing features for Frame.io and Premiere Pro\r\n / Frame.io now supports im… [+3479 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CBS Sports"
        },
        "author": "Michael Kaskey-Blomain",
        "title": "Thunder vs. Pelicans score, takeaways: Shai Gilgeous-Alexander leads OKC to upset victory in play-in game - CBS Sports",
        "description": "OKC will now face the Timberwolves in Minnesota on Friday for the No. 8 seed",
        "url": "https://www.cbssports.com/nba/news/thunder-vs-pelicans-score-takeaways-shai-gilgeous-alexander-leads-okc-to-upset-victory-in-play-in-game/live/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/04/12/282f374d-eb4d-4270-8323-03a41396a42a/thumbnail/1200x675/967979654df5d5e3acedc364dc062fb0/shai-gilgeous-alexnader-oklahoma-city-thunder-usatsi.jpg",
        "publishedAt": "2023-04-13T12:40:00Z",
        "content": "The New Orleans Pelicans and Oklahoma City Thunder squared off for an opportunity to extend their season in the Play-In Tournament on Wednesday night, and ultimately it was the Thunder who came out o… [+4277 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CNBC"
        },
        "author": "Michelle Fox",
        "title": "Stocks making the biggest premarket moves: Delta, First Solar, Steve Madden & more - CNBC",
        "description": "These are the stocks posting the largest moves in the premarket on Thursday.",
        "url": "https://www.cnbc.com/2023/04/13/stocks-making-the-biggest-premarket-moves-dal-fslr-shoo-and-more.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/107038840-gettyimages-1239608867-937496-fi-0329-delta-lax-006-ik.jpeg?v=1681388409&w=1920&h=1080",
        "publishedAt": "2023-04-13T12:20:09Z",
        "content": "Check out the companies making the biggest moves in premarket trading:\r\nDelta Air Lines Shares popped 2% in the premarket after the airline projected \"record advance bookings for the summer.\" It expe… [+1608 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Joe Sutton, Taylor Ward, Travis Caldwell",
        "title": "Historic rain in South Florida causes severe flooding, closing schools and Fort Lauderdale's airport - CNN",
        "description": "More rain is in the forecast after substantial downpours inundated Fort Lauderdale and parts of South Florida in a 1-in-1,000 year rainfall event, leading to a flash flood emergency in Broward County that closed schools, forced drivers to abandon their cars a…",
        "url": "https://www.cnn.com/2023/04/12/weather/florida-flash-flood-fort-lauderdale/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230412203720-01-flash-flood-emergency-florida-0413.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-04-13T12:17:00Z",
        "content": "More rain is in the forecast after substantial downpours inundated Fort Lauderdale and parts of South Florida in a 1-in-1,000 year rainfall event, leading to a flash flood emergency in Broward County… [+5824 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Xiaofei Xu, Oliver Briscoe",
        "title": "French protesters storm headquarters of luxury giant LVMH - CNN",
        "description": "Protesters forced their way into the Paris headquarters of luxury giant LVMH, as France saw a fresh round of demonstrations over government plans to raise the retirement age from 62 to 64.",
        "url": "https://www.cnn.com/2023/04/13/europe/france-protests-pensions-lvmh-intl/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230413121455-03-lvmh-paris-041323.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-04-13T12:16:00Z",
        "content": "Protesters forced their way into the Paris headquarters of luxury giant LVMH, as France saw a fresh round of demonstrations over government plans to raise the retirement age from 62 to 64. \r\nIf Macro… [+2088 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Sarah Dean, Anna Chernova",
        "title": "Leaked Pentagon documents suggest Russian government infighting over Ukraine - CNN",
        "description": "A fresh leak of classified US intelligence documents suggests broad infighting between Russian officials, including some within the Federal Security Service (FSB) and Defense Ministry, the New York Times reported Thursday.",
        "url": "https://www.cnn.com/2023/04/13/europe/pentagon-documents-russia-infighting-ukraine-intl/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230413064037-pentagon-file-040623.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-04-13T11:58:00Z",
        "content": "A fresh leak of classified US intelligence documents suggests broad infighting between Russian officials, including some within the Federal Security Service (FSB) and Defense Ministry, the New York T… [+3749 chars]"
    },
    {
        "source": {
            "id": "usa-today",
            "name": "USA Today"
        },
        "author": "Binaj Gurubacharya, USA TODAY",
        "title": "Mount Everest climbers missing after falling into Khumbu Icefall crack - USA TODAY",
        "description": "The climbers fell into the crevasse, thought to be about 160 feet deep, on Wednesday morning as they were moving toward the first camp.",
        "url": "https://www.usatoday.com/story/news/nation/2023/04/13/mount-everest-climbers-missing/11655531002/",
        "urlToImage": "https://www.gannett-cdn.com/presto/2021/02/08/USAT/28e291e7-dac6-4826-9568-6691b1d89a7e-AP_India_Glacier_Flooding_Explainer.jpg?auto=webp&crop=4751,2673,x0,y241&format=pjpg&width=1200",
        "publishedAt": "2023-04-13T11:38:35Z",
        "content": "KATHMANDU, Nepal – Three Sherpa climbers were missing Wednesday after they fell into a deep crevasse on a treacherous section of Mount Everest just above the base camp, a Nepalese mountaineering offi… [+1512 chars]"
    },
    {
        "source": {
            "id": "cbs-news",
            "name": "CBS News"
        },
        "author": null,
        "title": "\"Facebook rapist\" who escaped prison by faking death with help from guards is brought back to South Africa - CBS News",
        "description": "Heavily-armed police put his girlfriend, celebrity doctor Nandipha Magudumana, into a separate white van at the airport.",
        "url": "https://www.cbsnews.com/news/thabo-bester-facebook-rapist-brought-back-south-africa-escaped-prison-faked-death-guards/",
        "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2023/04/13/4e316690-470e-4919-8651-520c5afb54c5/thumbnail/1200x630g2/33df4065024b4dd1f66c8d15231bb925/ap23088421449358.jpg",
        "publishedAt": "2023-04-13T11:38:21Z",
        "content": "A man serving a life sentence for murder and rape who escaped from a top-security prison with help from guards by faking his own burning death was brought back to South Africa early Thursday after go… [+5426 chars]"
    }
];
constructor(){
    super();
    console.log("News constructor called");
    this.state = {
        articles: this.articles,
        loading : false
    }
};
    render() {
        return (
            <div className="container my-3">
                <h2>
                    Breaking-Newds Top Headlines
                </h2>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title='first title' description='firstdesc' imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR718PooLomdDaKrXM1LVBsWxKgbXcNQQygvw&usqp=CAU" newsUrl="to do"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title='first title' description='firstdesc' />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title='first title' description='firstdesc' />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title='first title' description='firstdesc' />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title='first title' description='firstdesc' />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title='first title' description='firstdesc' />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title='first title' description='firstdesc' />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title='first title' description='firstdesc' />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title='first title' description='firstdesc' />
                    </div>
                </div>
            </div>
        )
    }
}

export default News