"use client";
import useSWR from 'swr'

function fetcher(url: string) {
  return window.fetch(url).then((res) => res.json())
}

export function useCategorias(){
  const { data, error } = useSWR(`/api/get-categorias`, fetcher)

  return {
    categorias: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export function useAcervo(){
  const { data, error } = useSWR(`/api/get-acervo`, fetcher)

  return {
    acervo: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export function useAcervoCategoriasGenerales(){
  const { data, error } = useSWR(`/api/get-categoriasGenerales`, fetcher)

  return {
    acervoCategoriasGeneral: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export function useCreateRegistro() {
  const { data, error } = useSWR(`/api/create-registro`, fetcher)

  return {
    categorias: data,
    isLoading: !error && !data,
    isError: error,
  }
}