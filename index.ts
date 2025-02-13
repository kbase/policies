import dataPolicy from './policies/dataPolicy.1.md';
import kbaseUser1 from './policies/kbaseUser.1.md';
import kbaseUser2 from './policies/kbaseUser.2.md';

const policies = [
  kbaseUser1,
  kbaseUser2,
  dataPolicy
]

// Parsing

const parsed = policies.map((policyDataUrl)=>{
  const base64String = policyDataUrl.split(',')[1];
  return atob(base64String);
});

export default parsed