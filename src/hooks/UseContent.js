import { useContext, useEffect, useState } from 'react'
import FirebaseContext from '../context/FirebaseContext'

const UseContent = (target) => {
  const [content, setContent] = useState([])
  const { firebase } = useContext(FirebaseContext)

  useEffect(() => {
    const getContent = async () => {
      try {
        const reqContent = await firebase.firestore().collection(target).get()
        const allContent = await reqContent.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }))
        setContent(allContent)
      } catch (err) {
        console.log(err.message)
      }
    }
    getContent()
  }, [target, firebase])

  return { [target]: content }
}

export default UseContent
