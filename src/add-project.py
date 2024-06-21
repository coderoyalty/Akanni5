import json


def load_json(file_path: str):

    with open(file_path, "r", encoding="utf-8") as file:
        data = json.load(file)

    file.close()
    return data


if __name__ == "__main__":
    json_file = input("Enter JSON project file path: ")

    data = load_json(json_file)

    md_file = input("Enter markdown file path: ")

    with open(md_file, "r", encoding="utf-8") as file:
        project = {"content": file.read()}
        data.append(project)
        file.close()

    with open(json_file, "w", encoding="utf-8") as file:
        json.dump(data, file)
        file.close()
