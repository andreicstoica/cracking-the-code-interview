# Assumeyou have a method isSubstringwhich checks if oneword is a substring of another. 
# Given two strings, sl and s2, 
#write code to check if s2 is a rotation of sl using only one call to isSubstring 
# (e.g., "waterbottle" is a rotation of"erbottlewat").

def isSubstring(s1: str, s2: str) -> bool:
    s1_double = s1 + s1

    matchIdx = 0

    for c in s1_double:
        if c == s2[matchIdx]:
            matchIdx += 1
            if matchIdx == len(s2):
                return True
        else:
            matchIdx = 0

    return False

print(isSubstring('waterbottle', 'erbottlewat')) # expect True

print(isSubstring('waterbottle', 'heyyyy')) # expect False