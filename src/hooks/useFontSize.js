import React, { useLayoutEffect, useState } from 'react'

export const useFontSize = () => {
    const [size, setSize] = useState(localStorage.getItem("app-font-size") || "small")

    useLayoutEffect(() => {
        document.documentElement.setAttribute('data-size', size)
        localStorage.setItem("app-font-size", size)
      
    }, [size])
    // window.location.reload();
    return {size, setSize}
}
