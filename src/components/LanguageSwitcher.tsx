'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  isScrolled?: boolean;
  variant?: 'navbar' | 'mobile';
}

export default function LanguageSwitcher({ isScrolled = false, variant = 'navbar' }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  const toggle = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  if (variant === 'mobile') {
    return (
      <button
        onClick={toggle}
        className="flex items-center justify-center gap-2 w-full py-3 mt-4 bg-white/10 text-white font-medium rounded-xl hover:bg-white/20 transition-colors"
      >
        <Globe className="w-5 h-5" />
        {language === 'en' ? 'العربية' : 'English'}
      </button>
    );
  }

  return (
    <button
      onClick={toggle}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-100/80 text-gray-700 hover:bg-gray-200'
          : 'bg-white/10 text-white hover:bg-white/20'
      }`}
    >
      <Globe className="w-4 h-4" />
      <span>{language === 'en' ? 'AR' : 'EN'}</span>
    </button>
  );
}
