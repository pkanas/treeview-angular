import { Injectable } from '@angular/core';
import { TreeviewItem } from 'ngx-treeview';

export class BookService {  

  getBooks(): TreeviewItem[] {

    var convertChapters = chaptersList => {
      var chaptersArray = [];
      chaptersList.forEach((c, cIndex)=>{
        var chapterChildren = [
          {text: `id`, value: `${c.id}`},
          {text: `title`, value: `${c.title}`}
        ];

        chaptersArray.push({
          text : `cIndex`,
          value: `cIndex`,
          children : chapterChildren
        });

      });

      return chaptersArray;
    };

    var convertSubjects = subjectsList => {
      var subjectsArray = [];
      subjectsList.forEach((s, sIndex)=>{
        var tvChapters = convertChapters(s.chapters);
        var subjectChildren = [
          {text: `id`, value: `${s.id}`},
          {text: `title`, value: `${s.title}`},
          {text: `chapters`, value: tvChapters.length, children: tvChapters}
        ];

        subjectsArray.push({
          text : `${sIndex}`,
          value: `${sIndex}`,
          children : subjectChildren
        });
      });

      return subjectsArray;
    };

    var convertPackages = packagesList => {
      var packagesArray = [];
      packagesList.forEach((p, pIndex)=>{
        var tvSubjects = convertSubjects(p.subjects);
        var packageChildren = [
          {text: `id`, value: `${p.id}`},
          {text: `title`, value: `${p.title}`},
          {text: `subjects`, value:  tvSubjects.length, children: tvSubjects}
        ];

        packagesArray.push({
          text : `${pIndex}`,
          value: `${pIndex}`,
          children : packageChildren
        });
      });

      return packagesArray;
    };

    var convertBooks = booksList => {
      var booksArray = [];
      booksList.forEach((b, bIndex)=>{
        var tvPackages = convertPackages(b.packages);
        var bookChildren = [
          {text: `id`, value: `${b.id}`},
          {text: `title`, value: `${b.title}`},
          {text: `packages`, value:  tvPackages.length, children: tvPackages}
        ];

        booksArray.push({
          text : `${bIndex}`,
          value: `${bIndex}`,
          children : bookChildren
        });
      });

      return booksArray;
    };

    
   



    var resp = {
      "status": true,
      "message": "success",
      "data": [
        {
          "id": 1,
          "title": "Banking & Insurance",
          "packages": [
            {
              "id": 2,
              "title": "6 Month",
              "subjects": [
                {
                  "id": 2,
                  "title": "Cllerk-SBI",
                  "chapters": [
                    {
                      "id": 5,
                      "title": "BankClerkx-Chapter1"
                    },
                    {
                      "id": 6,
                      "title": "BankClerkx-Chapter7"
                    },
                  ]
                }
              ]
            }
          ]
        },
        // {
        //   "id": 2,
        //   "title": "SSC & RRB",
        //   "packages": [
        //     {
        //       "id": 3,
        //       "title": "Life time",
        //       "subjects": [
        //         {
        //           "id": 3,
        //           "title": "PO-SBI",
        //           "chapters": [
        //             {
        //               "id": 2,
        //               "title": "ch1"
        //             },
        //             {
        //               "id": 2,
        //               "title": "Po-chapter1"
        //             }
        //           ]
        //         }
        //       ]
        //     }
        //   ]
        // }
      ]
    };

    var tvBooks = convertBooks(resp.data);

    const finalTreeview = new TreeviewItem({ text: 'Books', value: resp.data.length, children: tvBooks });
        
    return [finalTreeview];
  }
}
