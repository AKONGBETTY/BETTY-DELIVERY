import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

const DEMO_SESSION_KEY = "betty-demo-session";

interface SignInPayload {
  email: string;
  password: string;
}

interface AuthContextValue {
  session: Session | null;
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  signIn: (payload: SignInPayload) => Promise<void>;
  signUp: (payload: SignInPayload) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

function createDemoSession(email: string): Session {
  const user: User = {
    id: `demo-${Date.now()}`,
    email,
    app_metadata: {},
    user_metadata: { full_name: email.split("@")[0] },
    aud: "authenticated",
    confirmed_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    last_sign_in_at: new Date().toISOString(),
    role: "authenticated",
    updated_at: new Date().toISOString(),
  } as User;

  return {
    access_token: `demo-access-${Date.now()}`,
    refresh_token: `demo-refresh-${Date.now()}`,
    expires_in: 3600,
    expires_at: Date.now() + 3600 * 1000,
    token_type: "bearer",
    user,
  } as Session;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const client = supabase;

    if (!client) {
      const savedSession = localStorage.getItem(DEMO_SESSION_KEY);
      if (savedSession) {
        try {
          setSession(JSON.parse(savedSession));
        } catch {
          localStorage.removeItem(DEMO_SESSION_KEY);
        }
      }
      setLoading(false);
      return;
    }

    const loadSession = async () => {
      const { data } = await client.auth.getSession();
      setSession(data.session ?? null);
      setLoading(false);
    };

    loadSession();

    const {
      data: { subscription },
    } = client.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async ({ email, password }: SignInPayload) => {
    if (!email.trim() || !password.trim()) {
      throw new Error("Please enter both email and password.");
    }

    if (!supabase) {
      const demoSession = createDemoSession(email.trim());
      localStorage.setItem(DEMO_SESSION_KEY, JSON.stringify(demoSession));
      setSession(demoSession);
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
    if (error) throw error;
  };

  const signUp = async ({ email, password }: SignInPayload) => {
    if (!email.trim() || !password.trim()) {
      throw new Error("Please enter both email and password.");
    }

    if (!supabase) {
      const demoSession = createDemoSession(email.trim());
      localStorage.setItem(DEMO_SESSION_KEY, JSON.stringify(demoSession));
      setSession(demoSession);
      return;
    }

    const { error } = await supabase.auth.signUp({ email: email.trim(), password });
    if (error) throw error;
  };

  const signOut = async () => {
    if (!supabase) {
      localStorage.removeItem(DEMO_SESSION_KEY);
      setSession(null);
      return;
    }

    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    setSession(null);
  };

  const value = useMemo<AuthContextValue>(
    () => ({
      session,
      user: session?.user ?? null,
      loading,
      isAuthenticated: Boolean(session),
      signIn,
      signUp,
      signOut,
    }),
    [session, loading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
