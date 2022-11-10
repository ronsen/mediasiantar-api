import axios from 'axios';
import * as cheerio from 'cheerio';

export const mistar = async () => {
    let url = 'https://www.mistar.id/?s=siantar';
    let response = await axios.get(url);
    let body = await response.data;
    let $ = cheerio.load(body);

    let articles = $('#tdi_111 .td_module_wrap')
        .map((i, el) => {
            return {
                title: $(el).find('h3 > a').text(),
                url: $(el).find('a').attr('href'),
                image: $(el).find('span.entry-thumb').attr('data-img-url')
            }
        })
        .toArray();

    return { url, articles };
}