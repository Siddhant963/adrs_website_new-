import ContactD from '../components/Contactd'

const Contact = () => {
  return (
    <>
    
    <ContactD/>
    {status && (
  <p className={`text-sm mt-4 ${status.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
    {status}
  </p>
)}

    </>
  )
}

export default Contact