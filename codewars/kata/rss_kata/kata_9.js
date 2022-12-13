/*
I am the father of three wonderful sons. before the beginning of the school year, I promised them that I would buy a bicycle for someone who would bring the best marks at the end of the school year. it's time to keep promises and I count on you.

You have 3 input objects(school diaries) with school subjects and marks (1-10). For example:
*/

function whoseBicycle(diary1, diary2, diary3) {
    let s1 = diary1.algebra + diary1.history + diary1.physics + diary1.geography + diary1.chemistry;
    let s2 = diary2.algebra + diary2.history + diary2.physics + diary2.geography + diary2.chemistry;
    let s3 = diary3.algebra + diary3.history + diary3.physics + diary3.geography + diary3.chemistry;
    console.log(s1,s2,s3)
    if ( s1 == s2 || s1 == s3 || s2 == s3) {
        return 'I need to buy a bicycle for my third son.';
    }
    if (s1 > s2 || s1 > s3 || s2 == s3) {
        return 'I need to buy a bicycle for my first son.';
    }
    if ( s1 > s2 && s1 > s3) {
        return 'I need to buy a bicycle for my first son.';
    }
    if ( s2 > s1 && s2 > s3) {
        return 'I need to buy a bicycle for my second son.';
    } else {
        return 'I need to buy a bicycle for my third son.';
    }
  }


console.log(whoseBicycle(
 
    {
        'algebra': 6,
        'history': 7,
        'physics': 8,
        'geography': 9,
        'chemistry': 10
      },
      {
        'algebra': 8,
        'history': 7,
        'physics': 8,
        'geography': 9,
        'chemistry': 10
      },
      {
        'algebra': 6,
        'history': 5,
        'physics': 5,
        'geography': 9,
        'chemistry': 10
      }));