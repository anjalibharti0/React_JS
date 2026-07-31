def lengthOfLongestSubstring(s):
    longest = 0

    for i in range(len(s)):
        current = ""

        for j in range(i, len(s)):

            if s[j] in current:
                break

            current = current + s[j]

            if len(current) > longest:
                longest = len(current)

    return longest