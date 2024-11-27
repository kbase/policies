import dataPolicy from './policies/dataPolicy.md';
import kbaseUser from './policies/kbaseUser.md';

const policies = [
  kbaseUser,
  dataPolicy
]

// Parsing

const parsed = policies.map((policyDataUrl)=>{
  const base64String = policyDataUrl.split(',')[1];
  return atob(base64String);
});

export default parsed