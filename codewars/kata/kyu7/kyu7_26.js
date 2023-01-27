// Whose bicycle?

function whoseBicycle(diary1, diary2, diary3) {
  let s1 = diary1.algebra + diary1.history + diary1.physics + diary1.geography + diary1.chemistry;
  let s2 = diary2.algebra + diary2.history + diary2.physics + diary2.geography + diary2.chemistry;
  let s3 = diary3.algebra + diary3.history + diary3.physics + diary3.geography + diary3.chemistry;
  console.log(s1,s2,s3)
  if(s3 == s2 && s3 == s1) {
    return 'I need to buy a bicycle for my third son.';
  }
  if ((s3 >= s2 && s3 >= s1) || (s3 >= s2 && s3 == s1) || (s3 >= s1 && s2 == s3)) {
    return 'I need to buy a bicycle for my third son.';
  }
  if ((s2 > s1 && s2 > s3) || (s2 > s3 && s2 == s1)) {
    return 'I need to buy a bicycle for my second son.';
  }
  if (s1 > s2 && s1 > s3) {
    return 'I need to buy a bicycle for my first son.';
  }
}


console.log(whoseBicycle({
  'algebra': 6,
  'history': 7,
  'physics': 8,
  'geography': 9,
  'chemistry': 10
},//40 14 year
{
  'algebra': 8,
  'history': 7,
  'physics': 8,
  'geography': 9,
  'chemistry': 10
},//42 9 year
{
  'algebra': 6,
  'history': 5,
  'physics': 5,
  'geography': 9,
  'chemistry': 10
}));//35 8 yar