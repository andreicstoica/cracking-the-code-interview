# Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palin­drome. 
# A palindrome is a word or phrase that is the same forwards and backwards. 
# A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words. 
# EXAMPLE 
# Input: Tact Coa 
# Output: True (permutations: "taco cat", "atco eta", etc.)

def isPalindrome(s: str) -> bool:
    stripped = s.replace(" ", "").lower()

    # dictionary to efficiently count freq of each char
    counts = {}
    for char in stripped:
        counts[char] = counts.get(char, 0) + 1 # count each letter (if found, returns number, otherwise 0)
    
    # count # of odds
    odd_counts = 0
    for count in counts.values():
        if count % 2 != 0:
            odd_counts += 1

    # return true if only 1 or 0 odds
    return odd_counts <= 1
        

print(isPalindrome("Tact Coa")) # expect True
print(isPalindrome("tab a cat")) # expect False
