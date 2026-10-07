export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
  created_at: string;
}

export interface Clinic {
  id: string;
  name: string;
  website_url: string;
  address: string;
  phone: string;
  user_id: string;
  created_at: string;
}

export interface VisibilityScore {
  score: number;
  explanation: string;
  confidence: number;
  last_updated: string;
}

export interface SEOAudit {
  clinic_id: string;
  website_url: string;
  score: number;
  issues_found: number;
  details: any;
  created_at: string;
}

export interface Competitor {
  id: string;
  name: string;
  website_url: string;
  visibility_score: number;
  last_analyzed: string;
}

export interface Report {
  id: string;
  clinic_id: string;
  report_type: string;
  status: 'pending' | 'completed' | 'failed';
  download_url?: string;
  created_at: string;
}

export interface Subscription {
  id: string;
  plan: 'free' | 'pro' | 'enterprise';
  status: 'active' | 'inactive' | 'cancelled';
  current_period_end: string;
}
