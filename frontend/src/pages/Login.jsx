const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    // 1. Récupérer le cookie CSRF
    await axios.get('/sanctum/csrf-cookie');
    
    // 2. Faire la requête d'authentification
    const endpoint = isLogin ? '/api/login' : '/api/register';
    const payload = isLogin 
      ? { email: formData.email, password: formData.password }
      : formData;
    
    const response = await axios.post(endpoint, payload);
    
    // 3. Redirection après succès
    navigate('/dashboard');
  } catch (error) {
    if (error.response?.status === 419) {
      console.error('Erreur CSRF - Veuillez rafraîchir la page');
    }
    setErrors(error.response?.data?.errors || {});
  }
};