export const useAuth = (): boolean => !!localStorage.getItem('secretToken');
