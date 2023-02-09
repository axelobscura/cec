"use client";
import useSWR from 'swr'

function fetcher(url: string) {
  return window.fetch(url).then((res) => res.json())
}

export function useAcervo(){
  const { data, error } = useSWR(`/api/get-acervo`, fetcher)

  return {
    acervo: data,
    isLoading: !error && !data,
    isError: error,
  }
}