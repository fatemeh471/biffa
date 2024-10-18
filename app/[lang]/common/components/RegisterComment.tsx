import { SendOutlined } from '@ant-design/icons';

export default async function RegisterComment({ cryptoList }: any) {
  return (
    <div >
      <h4 className="text-neutral-0 font-[700] w-full mb-4 md:text-[40px] text-[28px]">
        {cryptoList.registerComment}
      </h4>
      <div className="rounded-[24px] border-[1px] border-neutral-98 p-8">
        <p className="mb-2 text-neutral-25 text-base font-[500]">
          {cryptoList.writeComment}
        </p>
        <div className="rounded-[12px] bg-neutral-100 flex flex-col justify-between relative h-[149px] border-dashed border-[1px] border-neutral-98 pb-4 pt-5 px-4">
          <textarea
            className="mb-2 text-neutral-40 text-base font-[400] bg-transparent outline-none resize-none w-full h-[70px]"
            placeholder={cryptoList.writeYourComment}
            // value={comment}
            // onChange={(e) => setComment(e.target.value)}
          />
          <div className="flex items-end justify-end">
            <button
              className="py-[10px] self-left text-white font-[500] text-base rounded-[11px] bg-primary-40 px-[24px] flex items-center gap-1"
              //   onClick={handleSend}
              //   disabled={!comment.trim()} // Disable button if there's no comment
            >
              <SendOutlined
                className="me-1 w-[20px]"
                style={{ transform: 'rotate(-45deg)' }}
              />
              {cryptoList.sendYourSms}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
