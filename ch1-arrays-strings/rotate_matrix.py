# given an image represented by an NxN matrix
# where each pixel in the image is 4 bytes
# write a method to rotate the image by 90 degrees. can you do this in place?

example_photo = [
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    [4, 4, 4, 4]
]

def rotate_90(input: List[List[int]]):
    N`` = len(input)

    rotated = [[0] * N for _ in range(N)]

    for i in range(N):
        for j in range(N):
            rotated[N - 1 - i][j] = input[i][j]

    return rotated

# how tf do u do this in place some insane bitwise stuff?
    