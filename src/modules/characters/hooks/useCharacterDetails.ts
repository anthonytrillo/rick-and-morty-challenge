import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { fetchCharacterById } from '@/services/Characters.service';
import { ICharacterDetails } from '@/interfases/character';

export const useCharacterDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<ICharacterDetails>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const getCharacter = async () => {
      try {
        const data = await fetchCharacterById(Number(id));
        setCharacter(data);
      } catch (err) {
        setError(t("detailsErrorMessage"));
      } finally {
        setLoading(false);
      }
    };

    getCharacter();
  }, [id, t]);

  return { character, loading, error };
};