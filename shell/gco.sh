# 直接在根目录下运行 "./gco.sh 分支名" 来创建本地远程分支并建立关联关系(可以加 -f 强行删除已有的远程和本地同名分支, 慎用), 如果提示没权限则运行 "chmod -R 777 ./gco.sh"
# 或者把该 shell 放到 /Users/username/git_bin 下, 将 git_bin文件夹 配置到环境变量里, 之后就直接 "gco 分支名" 就可以了.
if [ ! -n "$1" ]; then
    echo "please input a new branch name.";
    exit 0;
fi

git fetch

if [ $? -ne 0 ]; then
  echo -e "\ncheck your network"
  exit 0;
fi

current_branch=$(git rev-parse --abbrev-ref HEAD)

if [ "$1" = "$current_branch" ]; then
    echo "current branch is $1, please checkout another branch.";
    exit 0;
fi

git pull origin $current_branch

exist_branch=$(git branch -a | grep " $1$")

warning_text="please use '<shell name> $1 -f' to force delete it after make sure you can do that."

if [ ! -z "$exist_branch" ]; then
  if [ -n "$2" ] && [ "$2" = "-f" ]; then
    git branch -D $1
  else
    echo "local branch $1 is already exist."
    echo $warning_text
    exit 0;
  fi
fi

exist_origin_branch=$(git branch -a | grep origin/$1$)

if [ ! -z "$exist_origin_branch" ]; then
  if [ -n "$2" ] && [ "$2" = "-f" ]; then
    git push origin --delete $1
  else
    echo "origin branch $1 is already exist"
    echo $warning_text
    exit 0;
  fi
fi

git checkout -b $1
git push -u origin $1

if [ $? -eq 0 ]; then
  echo "success checkout new branch $1 and related it to origin/$1."
  exit 0;
fi