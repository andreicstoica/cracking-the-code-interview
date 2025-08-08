#Implement a method to perform basic string compression using the counts of repeated characters. 
#For example, the string aabcccccaaa would become a2blc5a3. 
#If the "compressed" string would not become smaller than the original string, 
#your method should return the original string. 
#You can assume the string has only uppercase and lowercase letters (a - z).

def compression(s: str) -> str:
    # thinking of making a map, 
    # go through the keys/values and construct a string.
    # if its shroter than initial string return it

    
    compressed = "" # constructed string 
    hot_char = s[0] # set the char being counted consecutively 
    count = 0       # set the count as 0 to start

    for i in range(len(s)):
        c = s[i]

        if c == hot_char:
            count += 1
        else:
            # add freq for consecutive char to str
            compressed += hot_char
            compressed += str(count)

            # reset 
            hot_char = c
            count = 1  

        if i == len(s) - 1:
            compressed += hot_char
            compressed += str(count)
    
    if len(compressed) < len(s):
        return compressed
    else:
        return s

print(compression("aabcccccaaa"))