
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

/**
 * Utilitaire pour gérer les appels à Supabase avec gestion d'erreur intégrée
 */
export async function fetchDataFromSupabase<T>(
  fetchFunction: () => Promise<{ data: T | null; error: Error | null }>,
  errorMessage: string = "Erreur lors de la récupération des données"
): Promise<T | null> {
  try {
    const { data, error } = await fetchFunction();
    
    if (error) {
      console.error(error);
      toast.error(errorMessage);
      return null;
    }
    
    return data;
  } catch (err) {
    console.error(err);
    toast.error(errorMessage);
    return null;
  }
}

/**
 * Exemple d'utilisation:
 * 
 * const getProjects = async () => {
 *   return fetchDataFromSupabase(
 *     () => supabase.from('projects').select('*'),
 *     "Erreur lors de la récupération des projets"
 *   );
 * };
 */
