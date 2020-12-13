import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

import Books from '../components/Books';

const mockStore = configureStore([]);

describe('Books React-Redux Component', () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({
      books: [
        {
          kind: 'books#volume',
          id: 'kIYSAAAAIAAJ',
          etag: 'AqoDY/Qlkdk',
          selfLink: 'https://www.googleapis.com/books/v1/volumes/kIYSAAAAIAAJ',
          volumeInfo: {
            title: 'Thesavrvs Lingvae Latinae Compendiarivs Or, A Compendious Dictionary of the Latin Tongue',
            subtitle: 'Designed Chiefly for the Use of the British Nations ...',
            authors: [
              'Robert Ainsworth',
            ],
            publishedDate: '1751',
            industryIdentifiers: [
              {
                type: 'OTHER',
                identifier: 'NYPL:33433075918759',
              },
            ],
            readingModes: {
              text: false,
              image: true,
            },
            printType: 'BOOK',
            categories: [
              'English language',
            ],
            maturityRating: 'NOT_MATURE',
            allowAnonLogging: false,
            contentVersion: '0.2.2.0.full.1',
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            imageLinks: {
              smallThumbnail: 'http://books.google.com/books/content?id=kIYSAAAAIAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
              thumbnail: 'http://books.google.com/books/content?id=kIYSAAAAIAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
            },
            language: 'en',
            previewLink: 'http://books.google.co.in/books?id=kIYSAAAAIAAJ&pg=PP433&dq=a&hl=&as_brr=7&cd=1&source=gbs_api',
            infoLink: 'https://play.google.com/store/books/details?id=kIYSAAAAIAAJ&source=gbs_api',
            canonicalVolumeLink: 'https://play.google.com/store/books/details?id=kIYSAAAAIAAJ',
          },
          saleInfo: {
            country: 'IN',
            saleability: 'FREE',
            isEbook: true,
            buyLink: 'https://play.google.com/store/books/details?id=kIYSAAAAIAAJ&rdid=book-kIYSAAAAIAAJ&rdot=1&source=gbs_api',
          },
          accessInfo: {
            country: 'IN',
            viewability: 'ALL_PAGES',
            embeddable: true,
            publicDomain: true,
            textToSpeechPermission: 'ALLOWED',
            epub: {
              isAvailable: false,
              downloadLink: 'http://books.google.co.in/books/download/Thesavrvs_Lingvae_Latinae_Compendiarivs.epub?id=kIYSAAAAIAAJ&hl=&output=epub&source=gbs_api',
            },
            pdf: {
              isAvailable: true,
              downloadLink: 'http://books.google.co.in/books/download/Thesavrvs_Lingvae_Latinae_Compendiarivs.pdf?id=kIYSAAAAIAAJ&hl=&output=pdf&sig=ACfU3U2mwu5GnWZ4gY5HXOBPPS5tn0uz3w&source=gbs_api',
            },
            webReaderLink: 'http://play.google.com/books/reader?id=kIYSAAAAIAAJ&hl=&as_brr=7&printsec=frontcover&source=gbs_api',
            accessViewStatus: 'FULL_PUBLIC_DOMAIN',
            quoteSharingAllowed: false,
          },
          searchInfo: {
            textSnippet: '<b>A</b> speig be [ bird ) Picus martius . membring ibeir former plunder and vi &amp; tory , <br> wified To spin out <b>a</b> discourse , Sermonem longiùe proA Jeel , Incantamentum , 2<br> . carmen magicum . for <b>a</b> civil war , &amp; quod plerique Sullani milites , ducěre .',
          },
        },
      ],
    });

    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <Router>
          <Books />
        </Router>
      </Provider>,
    );
  });

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should not dispatch action if books length is greather than 0', () => {
    expect(store.dispatch).toHaveBeenCalledTimes(0);
  });
});
