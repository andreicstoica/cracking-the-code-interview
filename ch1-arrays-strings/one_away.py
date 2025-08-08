# three types of edits on strings:
# 1: insert a char
# 2: remove a char
# 3: replace a char
# given two strings, write a function to check if they are one edit (or zero edits) away

def one_away(s1: str, s2: str) -> bool:
    # If length difference is more than 1, impossible in one edit
    if abs(len(s1) - len(s2)) > 1:
        return False

    i = j = 0          # pointers for s1 and s2
    edits = 0          # how many edits we've used

    while i < len(s1) and j < len(s2):
        if s1[i] == s2[j]:
            # characters match; advance both
            i += 1
            j += 1
        else:
            edits += 1
            if edits > 1:
                return False

            # Decide which pointer(s) to move based on lengths
            if len(s1) == len(s2):
                # aka replace a char
                i += 1
                j += 1
            elif len(s1) > len(s2):
                # s1 is longer so skip
                i += 1
            else:
                # s2 is longer so skip
                j += 1

    # leftover char, that's one more edit
    if i < len(s1) or j < len(s2):
        edits += 1

    return edits <= 1


print(one_away("pale", "ple"))   # True 
print(one_away("pales", "pale")) # True 
print(one_away("pale", "bale"))  # True 
print(one_away("pale", "bake"))  # False