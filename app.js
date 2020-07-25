class Request {
   async get(url){
      
      const response =await fetch(url); //response object aldik

      const data1 = await response.json();  //JSON object

      return data1;  //promise objesi seklinde döndürdük
   }


   async post(url,data){

      const response = await fetch(url,{
         method:'POST',
         body:JSON.stringify(data),
         headers:{
            "Content-type" : "application/json; charset=UTF-8"
         }
      });  //response objesi gelir

      const data2 = await response.json();

      return data2;
   }


   async put(url,data){

      const response = await fetch(url,{
         method:'PUT',
         body:JSON.stringify(data),
         headers:{
            "Content-type" : "application/json; charset=UTF-8"
         }
      });  //response OBJECT

      const data3 = response.json();

      return data3;
   }


   async delete(url){
      
      const response = await fetch(url,{
         method:'DELETE'
      });

      // const data = response.json();

      return 'veri silme islemi basarili';
   }
}

const request = new Request();

request.get('https://jsonplaceholder.typicode.com/albums').then((result) => {
   console.log(result);
}).catch((err) => {
   error.log(err);
});



request.post('https://jsonplaceholder.typicode.com/posts',{"userId":1,"title":'thriller'}).then((result) => {console.log(result);
   
}).catch((err) => {console.log(err);
   
});

request.put('https://jsonplaceholder.typicode.com/posts/1',{"userId":1,"title":'sakir'}).then((result) => {console.log(result);
   
}).catch((err) => {error.log(err);
   
});


request.delete('https://jsonplaceholder.typicode.com/posts/1').then((result) => {
   console.log(result);
}).catch((err) => {
   error.log(err);
});