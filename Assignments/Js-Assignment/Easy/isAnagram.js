function isAnagram(str1, str2) {
  newStr1 = sortStr(str1.toLowerCase());
  newStr2 = sortStr(str2.toLowerCase());
  console.log(newStr1, newStr2)
  if (newStr1 == newStr2) {
    console.log("Strigs are Anagram")
  }
  else {
    console.log("Strings are not Anagram")
  }
}

function sortStr(str) {
  newstr = str.split('')
  newstr.sort()
  let strArr = newstr.join('')
  return strArr
}
str1 = 'Rohit'
str2 = 'Oithr'

isAnagram(str1, str2)
isAnagram('mom', 'rom')