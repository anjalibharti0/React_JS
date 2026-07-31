def minimumBribes(q):

    bribes = 0

    for i in range(len(q)):

        if q[i] - (i + 1) > 2:
            print("Too chaotic")
            return

        start = max(0, q[i] - 2)

        for j in range(start, i):

            if q[j] > q[i]:
                bribes = bribes + 1

    print(bribes)