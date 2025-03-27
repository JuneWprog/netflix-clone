import React from 'react'
import {useEffect, useState} from 'react'
import {useContentStore} from '../store/Content'
import axios from 'axios'

const useGetTrendingContent = () => {
    const [trendingContent, setTrendingContent] = useState(null)
    const {contentType} = useContentStore()
    console.log("contentType", contentType)
    useEffect(() => {
        const fetchTrendingContent = async () => {
            try {
                const res = await axios.get(`/api/v1/${contentType}/trending`)
                setTrendingContent(res.data.content)
            } catch (error) {
                console.log("getTrendingContent", error)
            }
        }
        fetchTrendingContent()
    }, [contentType])
  return {trendingContent}
}

export default useGetTrendingContent
