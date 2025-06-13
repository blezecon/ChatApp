import React from 'react'

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const {signup, isSigningUp} = useAuthStore();

  const validateForm = () => {}

  const handleSubmit = async (e) => {
    e.preventDefault()
  }


  return (
    <div className='flex'> 
      
    </div>
  )
}

export default SignUpPage