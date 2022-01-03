let students = [
    {
      name: "david",
      GPA: 3.3
    },
    {
      name: "sheila",
      GPA: 3.1
    },
    {
      name: "Alonzo",
      GPA: 3.65
    },
    {
      name: "Mary",
      GPA: 3.8
    }
  ]
   
  let admitted =[];
   
  for (let i=0; i <students.length; i++){
    if(students[i].gpa > 3.2)
      admitted.push(students[i]);
  }

  filter