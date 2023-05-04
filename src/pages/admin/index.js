import Ordenes from '@/components/Ordenes';
import axios from 'axios';
import useSWR from 'swr';

export default function Index(){
   const fetcher = ()=> axios('/api/ordenes').then( datos => datos.data);
   const { data, error, isLoading } = useSWR('/api/ordenes', fetcher);
   return(
      <>
      <main className="container w-11/12 mx-auto mt-5">   
         <h1 className="font-black text-3xl">Panel Administrativo</h1>
         <p className="text-xl mt-1 mb-5">Administra las ordenes</p>

         {data && data.length ? data.map(orden => (
            <Ordenes 
               key={orden.id}
               orden = {orden}
            />
         )) : <p>No hay ordenes</p>}
      </main>
      </>
   )
}