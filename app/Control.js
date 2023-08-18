'use client'

import Link from 'next/link';
import { useParams, useRouter} from 'next/navigation';

export function Control() {
  const params = useParams();
  const id = params.id;
  const router = useRouter();
  return (
    <ul>
      <li><Link href="/create">Create</Link></li>
      {id ? <>
        <li><Link href={'/update/' + id}>Update</Link></li>
        <li><input type="button" value="delete" onClick={()=>{

            const options = {method : 'DELETE'}

            fetch(process.env.NEXT_PUBLIC_API_URL + 'topics/' + id, options)
            .then(res => res.json())
            .then(result => {
              console.log('result : ' + result);
              
              //root 로 이동
              router.push('/');

              //서버 컴포넌트 refresh
              router.refresh();

            })
        }} /></li>
      </> : null}
    </ul>
  );
}
