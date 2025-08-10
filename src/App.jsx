import React from 'react';
import Header from './components/Header';
import URLShortenerForm from './components/URLShortenerForm';
import URLResult from './components/URLResult';
import Footer from './components/Footer';
import Background from './components/Background';

const App = () => {
  const [urlOriginal, setUrlOriginal] = React.useState('');
  const [urlEncurtada, setUrlEncurtada] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleSubmit = async () => {
    setIsLoading(true);
    setError('');

    if (!inputValue.trim()) {
      setError('Por favor, digite uma URL válida');
      setIsLoading(false);
      return;
    }

    try {
      setUrlOriginal(inputValue);

      const response = await fetch('http://localhost:5099/encurtar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: inputValue,
        }),
      });

      const data = await response.json();
      setUrlEncurtada(data.urlEncurtada || 'URL encurtada não disponível');
    } catch (err) {
      setError('Erro ao encurtar a URL. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async () => {
    if (urlEncurtada && urlEncurtada !== 'URL encurtada não disponível') {
      try {
        await navigator.clipboard.writeText(urlEncurtada);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Erro ao copiar:', err);
      }
    }
  };

  const clearResults = () => {
    setUrlOriginal('');
    setUrlEncurtada('');
    setError('');
    setInputValue('');
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center p-4 relative">
        <Background />

        <div className="relative z-10 w-full max-w-2xl">
          <Header />
          <URLShortenerForm
            inputValue={inputValue}
            setInputValue={setInputValue}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            error={error}
          />
          {(urlOriginal || urlEncurtada) && (
            <URLResult
              urlOriginal={urlOriginal}
              urlEncurtada={urlEncurtada}
              copyToClipboard={copyToClipboard}
              copied={copied}
              clearResults={clearResults}
            />
          )}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;