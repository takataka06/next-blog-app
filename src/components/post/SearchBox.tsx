"use client"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function SearchBox() {
  const [ search, setSearch ] = useState("")
  const [ debouncedSearch, setDebouncedSearch ] = useState("")
  const router = useRouter()

  //でばうんす
  useEffect(() => {
    const timer = setTimeout(()=> {
      setDebouncedSearch(search)
    }, 500)

    return () => clearTimeout(timer)
  }, [search])

  // でバウンスサーチが変わったら実行
  useEffect(() => {
    if (debouncedSearch) {
      router.push(`/?search=${debouncedSearch.trim()}`)
    }
  }, [debouncedSearch, router])
  return (
    <>
    <Input
      placeholder="記事を選択"
      className="w-[200px] md:w-[300px]"
      value={search}
      onChange= {(e) => {
        setSearch(e.target.value)
        }
      }
    />
    </>
  )
}
