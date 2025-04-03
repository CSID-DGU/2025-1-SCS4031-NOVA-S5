function UserCard() {
  const mockUserData = {
    name: '나무심는김노바',
    profileImage: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D',
    fortuneOfToday: '오늘도 커피 한 잔 하고\n 2개의 리워드를 얻어보세요!',
    stamp: 2,
    reward: 3,
  };

  return (
    <div className="bg-[#E2ECDC] rounded-[10px] p-[16px] w-[330px] h-[184px]">
      <div className="flex flex-col gap-[15px]">
        <div className="flex gap-[12px]">
          <img 
            src={mockUserData.profileImage} 
            alt="profile" 
            className="w-[25px] h-[25px] rounded-full object-cover"
          />
          <p className="text-[17px] font-[700] text-[#254434]">{mockUserData.name}님</p>
          
        </div>
        <p className="whitespace-pre-line text-[12px] text-[#8E8E93] ml-[35px]">
          {mockUserData.fortuneOfToday}
        </p>
      </div>
      <div className="mt-[30px]">
        <div className="flex gap-[10px] mt-[10px] ml-[35px]">
          <img src="/icon/stamp.svg" alt="stamp" />
          <p className="text-[12px] text-[#121212] font-[600]">모은 스탬프 {mockUserData.stamp}개</p>
        </div>
        <div className="flex gap-[10px] mt-[10px] ml-[35px]">
          <img src="/icon/reward.svg" alt="reward" />
          <p className="text-[12px] text-[#121212] font-[600]">얻은 리워드 {mockUserData.reward}개</p>
        </div>
      </div>
      {/* 애니메이션 추가. */}
    </div>
  );
}

export default UserCard;
