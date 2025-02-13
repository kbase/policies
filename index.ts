import dataPolicy from './policies/dataPolicy.1.md';
import kbaseUser1 from './policies/kbaseUser.1.md';
import kbaseUser2 from './policies/kbaseUser.2.md';

const policies = [
  kbaseUser1,
  kbaseUser2,
  dataPolicy
]

// Parsing

function b64DecodeUnicode(str:string) {
  // Going backwards: from bytestream, to percent-encoding, to original string.
  return decodeURIComponent(atob(str).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

const parsed = policies.map((policyDataUrl)=>{
  const base64String = policyDataUrl.split(',')[1];
  return b64DecodeUnicode(base64String);
});

export default parsed