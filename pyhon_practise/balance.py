def isBalanced(s):

    stack = []

    for ch in s:

        if ch == '(' or ch == '[' or ch == '{':
            stack.append(ch)

        else:

            if len(stack) == 0:
                return "NO"

            top = stack.pop()

            if ch == ')' and top != '(':
                return "NO"

            if ch == ']' and top != '[':
                return "NO"

            if ch == '}' and top != '{':
                return "NO"

    if len(stack) == 0:
        return "YES"

    return "NO"
print(isBalanced("[({})]"))    