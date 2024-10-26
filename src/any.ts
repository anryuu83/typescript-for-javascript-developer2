import axios from 'axios';
export {};
interface Article {
  id: number;
  title: string;
  description: string;
}
let url: string =
  'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';
axios.get(url).then((response) => {
  let data: Article[] = response.data;
  console.log(data);
  data = [
    {
      id: 20,
      title: 'anzhe',
      description: 'my brother',
    },
    {
      id: 30,
      title: 'anryu',
      description: 'me',
    },
  ];
  console.log(data);
});
