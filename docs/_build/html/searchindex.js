Search.setIndex({docnames:["index","source/backbones","source/carzam","source/crawlers","source/generators","source/loss","source/loss.builders","source/main","source/models","source/modules","source/optimizer","source/scheduler","source/trainer","source/utils","source/vae_gan"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:56},filenames:["index.rst","source\\backbones.rst","source\\carzam.rst","source\\crawlers.rst","source\\generators.rst","source\\loss.rst","source\\loss.builders.rst","source\\main.rst","source\\models.rst","source\\modules.rst","source\\optimizer.rst","source\\scheduler.rst","source\\trainer.rst","source\\utils.rst","source\\vae_gan.rst"],objects:{"":{backbones:[1,0,0,"-"],carzam:[2,0,0,"-"],crawlers:[3,0,0,"-"],generators:[4,0,0,"-"],loss:[5,0,0,"-"],main:[7,0,0,"-"],models:[8,0,0,"-"],optimizer:[10,0,0,"-"],scheduler:[11,0,0,"-"],trainer:[12,0,0,"-"],utils:[13,0,0,"-"],vae_gan:[14,0,0,"-"]},"backbones.resnet":{BasicBlock:[1,1,1,""],Bottleneck:[1,1,1,""],ChannelAttention:[1,1,1,""],InputAttention:[1,1,1,""],ResNet:[1,1,1,""],SpatialAttention:[1,1,1,""],resnet101:[1,4,1,""],resnet152:[1,4,1,""],resnet18:[1,4,1,""],resnet34:[1,4,1,""],resnet50:[1,4,1,""],resnext101_32x8d:[1,4,1,""],resnext50_32x4d:[1,4,1,""],wide_resnet101_2:[1,4,1,""],wide_resnet50_2:[1,4,1,""]},"backbones.resnet.BasicBlock":{expansion:[1,2,1,""],forward:[1,3,1,""]},"backbones.resnet.Bottleneck":{expansion:[1,2,1,""],forward:[1,3,1,""]},"backbones.resnet.ChannelAttention":{forward:[1,3,1,""]},"backbones.resnet.InputAttention":{forward:[1,3,1,""]},"backbones.resnet.ResNet":{forward:[1,3,1,""],load_param:[1,3,1,""]},"backbones.resnet.SpatialAttention":{forward:[1,3,1,""]},"crawlers.Cars196DataCrawler":{Cars196DataCrawler:[3,1,1,""]},"crawlers.Cars196DataCrawler.Cars196DataCrawler":{crawl:[3,3,1,""]},"crawlers.ClassedCrawler":{ClassedCrawler:[3,1,1,""]},"crawlers.ClassedCrawler.ClassedCrawler":{crawl:[3,3,1,""]},"crawlers.MTMCDataCrawler":{MTMCDataCrawler:[3,1,1,""]},"crawlers.MTMCDataCrawler.MTMCDataCrawler":{crawl:[3,3,1,""]},"crawlers.Market1501DataCrawler":{Market1501DataCrawler:[3,1,1,""]},"crawlers.Market1501DataCrawler.Market1501DataCrawler":{crawl:[3,3,1,""]},"crawlers.ReidDataCrawler":{ReidDataCrawler:[3,1,1,""]},"crawlers.ReidDataCrawler.ReidDataCrawler":{crawl:[3,3,1,""]},"crawlers.VRICDataCrawler":{VRICDataCrawler:[3,1,1,""]},"crawlers.VRICDataCrawler.VRICDataCrawler":{crawl:[3,3,1,""]},"generators.Cars196Generator":{Cars196Generator:[4,1,1,""],TDataSet:[4,1,1,""],TSampler:[4,1,1,""]},"generators.Cars196Generator.Cars196Generator":{collate_simple:[4,3,1,""],collate_with_camera:[4,3,1,""],setup:[4,3,1,""]},"generators.Cars196Generator.TDataSet":{load:[4,3,1,""]},"generators.ClassedGenerator":{ClassedGenerator:[4,1,1,""]},"generators.ClassedGenerator.ClassedGenerator":{setup:[4,3,1,""]},"generators.SequencedGenerator":{SequencedGenerator:[4,1,1,""],TDataSet:[4,1,1,""],TSampler:[4,1,1,""]},"generators.SequencedGenerator.SequencedGenerator":{collate_simple:[4,3,1,""],collate_with_camera:[4,3,1,""],setup:[4,3,1,""]},"generators.SequencedGenerator.TDataSet":{load:[4,3,1,""]},"loss.MarginLoss":{MarginLoss:[5,1,1,""]},"loss.MarginLoss.MarginLoss":{__call__:[5,3,1,""],average_mine:[5,3,1,""],euclidean_dist:[5,3,1,""],hard_mine:[5,3,1,""]},"loss.ProxyNCALoss":{ProxyNCA:[5,1,1,""]},"loss.SoftmaxLabelSmooth":{SoftmaxLabelSmooth:[5,1,1,""]},"loss.SoftmaxLabelSmooth.SoftmaxLabelSmooth":{__call__:[5,3,1,""]},"loss.SoftmaxLogitsLoss":{SoftmaxLogitsLoss:[5,1,1,""]},"loss.SoftmaxLogitsLoss.SoftmaxLogitsLoss":{__call__:[5,3,1,""]},"loss.TripletLoss":{TripletLoss:[5,1,1,""]},"loss.TripletLoss.TripletLoss":{__call__:[5,3,1,""],all_mining:[5,3,1,""],hard_mining:[5,3,1,""]},"loss.builders":{ReIDLossBuilders:[6,0,0,"-"]},"loss.builders.ReIDLossBuilders":{ReIDLossBuilder:[6,1,1,""]},"loss.builders.ReIDLossBuilders.ReIDLossBuilder":{LOSS_PARAMS:[6,2,1,""]},"models.CarzamResnet":{CarzamResnet:[8,1,1,""]},"models.CarzamResnet.CarzamResnet":{base_forward:[8,3,1,""],build_base:[8,3,1,""],build_normalization:[8,3,1,""],forward:[8,3,1,""]},"models.ResnetBase":{ResnetBase:[8,1,1,""]},"models.ResnetBase.ResnetBase":{base_forward:[8,3,1,""],build_base:[8,3,1,""],build_normalization:[8,3,1,""]},"models.VAEGAN":{ConvBlock:[8,1,1,""],DeConvBlock:[8,1,1,""],Decoder:[8,1,1,""],Discriminator:[8,1,1,""],Encoder:[8,1,1,""],LatentDiscriminator:[8,1,1,""],VAEGAN:[8,1,1,""]},"models.VAEGAN.ConvBlock":{forward:[8,3,1,""]},"models.VAEGAN.DeConvBlock":{forward:[8,3,1,""]},"models.VAEGAN.Decoder":{expansion_base:[8,2,1,""],forward:[8,3,1,""],weight_init_normal:[8,3,1,""],weights_init:[8,3,1,""]},"models.VAEGAN.Discriminator":{expansion_base:[8,2,1,""],forward:[8,3,1,""],weight_init_normal:[8,3,1,""],weights_init:[8,3,1,""]},"models.VAEGAN.Encoder":{expansion_base:[8,2,1,""],forward:[8,3,1,""],weight_init_normal:[8,3,1,""],weights_init:[8,3,1,""]},"models.VAEGAN.LatentDiscriminator":{expansion_base:[8,2,1,""],forward:[8,3,1,""],weight_init_normal:[8,3,1,""],weights_init:[8,3,1,""]},"models.VAEGAN.VAEGAN":{forward:[8,3,1,""]},"models.abstracts":{ReidModel:[8,1,1,""]},"models.abstracts.ReidModel":{LambdaLayer:[8,1,1,""],base_forward:[8,3,1,""],build_base:[8,3,1,""],build_normalization:[8,3,1,""],forward:[8,3,1,""],partial_load:[8,3,1,""],weights_init_kaiming:[8,3,1,""],weights_init_softmax:[8,3,1,""]},"models.abstracts.ReidModel.LambdaLayer":{forward:[8,3,1,""]},"optimizer.ReIDOptimizerBuilder":{ReIDOptimizerBuilder:[10,1,1,""]},"optimizer.ReIDOptimizerBuilder.ReIDOptimizerBuilder":{build:[10,3,1,""]},"optimizer.VAEGANOptimizerBuilder":{VAEGANOptimizerBuilder:[10,1,1,""]},"optimizer.VAEGANOptimizerBuilder.VAEGANOptimizerBuilder":{build:[10,3,1,""]},"scheduler.FineGrainedSteppedLR":{FineGrainedSteppedLR:[11,1,1,""]},"scheduler.FineGrainedSteppedLR.FineGrainedSteppedLR":{get_lr:[11,3,1,""],lr_mult:[11,3,1,""],lr_plus:[11,3,1,""]},"trainer.SimpleTrainer":{SimpleTrainer:[12,1,1,""]},"trainer.SimpleTrainer.SimpleTrainer":{apex:[12,2,1,""],cmc:[12,3,1,""],cosine_query_to_gallery_distances:[12,3,1,""],eval_func:[12,3,1,""],eval_veri:[12,3,1,""],evaluate:[12,3,1,""],load:[12,3,1,""],mean_ap:[12,3,1,""],query_to_gallery_distances:[12,3,1,""],save:[12,3,1,""],setup:[12,3,1,""],step:[12,3,1,""],train:[12,3,1,""]},"trainer.VAEGANTrainer":{VAEGANTrainer:[12,1,1,""]},"trainer.VAEGANTrainer.VAEGANTrainer":{evaluate:[12,3,1,""],load:[12,3,1,""],save:[12,3,1,""],setup:[12,3,1,""],step:[12,3,1,""],train:[12,3,1,""]},"utils.layers":{FixedInstanceNorm1d:[13,1,1,""],L2Norm:[13,1,1,""]},"utils.layers.L2Norm":{forward:[13,3,1,""],reset_parameters:[13,3,1,""]},"utils.math":{pairwise_distance:[13,4,1,""]},"utils.torch_utils":{rename_state_dict_keys:[13,4,1,""]},"utils.web":{download:[13,4,1,""]},backbones:{resnet:[1,0,0,"-"]},crawlers:{Cars196DataCrawler:[3,0,0,"-"],ClassedCrawler:[3,0,0,"-"],MTMCDataCrawler:[3,0,0,"-"],Market1501DataCrawler:[3,0,0,"-"],ReidDataCrawler:[3,0,0,"-"],VRICDataCrawler:[3,0,0,"-"]},generators:{Cars196Generator:[4,0,0,"-"],ClassedGenerator:[4,0,0,"-"],SequencedGenerator:[4,0,0,"-"]},loss:{Loss:[5,1,1,""],MarginLoss:[5,0,0,"-"],ProxyNCALoss:[5,0,0,"-"],ProxyTripletLoss:[5,0,0,"-"],SoftmaxLabelSmooth:[5,0,0,"-"],SoftmaxLogitsLoss:[5,0,0,"-"],TripletLoss:[5,0,0,"-"],builders:[6,0,0,"-"]},models:{CarzamResnet:[8,0,0,"-"],ResnetBase:[8,0,0,"-"],VAEGAN:[8,0,0,"-"],abstracts:[8,0,0,"-"],carzam_model_builder:[8,4,1,""],model_builder:[8,4,1,""],vaegan_model_builder:[8,4,1,""],veri_model_builder:[8,4,1,""]},optimizer:{ReIDOptimizerBuilder:[10,0,0,"-"],VAEGANOptimizerBuilder:[10,0,0,"-"]},scheduler:{FineGrainedSteppedLR:[11,0,0,"-"]},trainer:{SimpleTrainer:[12,0,0,"-"],VAEGANTrainer:[12,0,0,"-"]},utils:{fix_generator_arguments:[13,4,1,""],generate_logger:[13,4,1,""],generate_save_names:[13,4,1,""],layers:[13,0,0,"-"],math:[13,0,0,"-"],torch_utils:[13,0,0,"-"],web:[13,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:function"},terms:{"1x1":1,"32x4d":1,"32x8d":1,"abstract":[0,9],"boolean":[5,13],"class":[1,2,3,4,5,6,8,10,11,12,13],"default":[5,8,13],"float":[5,11],"function":[1,8,13],"int":[4,5,8,11],"new":[2,11,13],"return":[1,4,5,8,13],"true":[1,4,5,13],"var":13,"while":[1,8,13],For:5,NOT:8,One:4,The:[1,2,8,13],Used:5,With:13,__call__:5,_instancenorm:13,_lrschedul:11,_name:10,abov:2,absolut:11,accept:13,act:[8,11],adam:10,add:8,added:[8,13],addit:[11,13],adversari:2,affin:13,after:8,afterward:[1,8,13],aggreg:1,all:[1,5,8,13],all_min:5,allow:11,although:[1,8,13],alwai:13,anchor:5,anyth:8,apex:12,appli:13,approach:2,arch:8,architectur:8,arg:[5,6,13],argument:13,artifact:2,attent:[1,8],attr:13,averag:[5,8],average_min:5,backbon:[0,9],backup_directori:12,bar:1,base:[1,2,3,4,5,6,8,10,11,12,13],base_forward:8,base_lr:[10,11],base_width:1,basic:8,basicblock:1,batch:[4,5,8,12,13],batch_siz:[4,5,12],beta:[],block:1,blur:2,bool:[1,11],both:13,bottleneck:1,bounding_box_test:3,bounding_box_train:3,build:[5,8,10],build_bas:8,build_norm:8,builder:[0,5,8,9],calcul:[5,13],call:[1,8,13],camera:[2,12],can:[2,8],cann:8,care:[1,8,13],cars196:3,cars196datacrawl:[0,9],cars196gener:[0,9],cars_test:3,cars_train:3,carzam:[0,8,9],carzam_model_build:8,carzamresnet:[0,9],cfg:13,chang:[2,8,11],channel:[1,8,13],channelattent:1,checkpoint:12,classedcrawl:[0,9],classedgener:[0,9],classifi:[2,8],cmc:12,collate_simpl:4,collate_with_camera:4,collect:2,comput:[1,8,13],concept:2,constant:5,constraint:5,construct:8,contain:[5,8],content:[0,9],contextu:0,continue_epoch:12,convblock:8,convent:13,convers:2,convert:2,convolut:[1,8],core:8,cosine_query_to_gallery_dist:12,cpu:5,crawl:[3,4],crawler:[0,9],creat:[2,8],current:[8,11],data:[2,4,13],data_fold:3,datacrawl:4,dataset:[2,4,8],decod:8,deconvblock:8,decreas:11,deep:1,def:13,defin:[1,8,13],definit:11,denomin:13,describ:13,deviat:[8,13],devic:5,dict:[8,13],differ:[2,13],dilat:1,dim:8,dimens:[5,8,13],dimension:8,directori:4,discard:12,discrimin:8,displai:1,distanc:[5,13],distmat:12,doe:[2,8,13],domain:2,done:13,download:[1,13],downsampl:1,drift:2,dukemtmc:3,dure:[4,11,13],each:[2,5,11,12,13],either:11,els:[5,8],embed:8,embed_dim:5,embedding_dimens:8,empti:8,encod:8,epoch:[11,12],eps:[5,13],epsilon:13,equal:8,estim:13,eta:13,euclidean:5,euclidean_dist:5,eval:13,eval_func:12,eval_veri:12,evalu:[12,13],everi:[1,8,13],exampl:[2,11,13],except:1,exist:2,expans:1,expansion_bas:8,expect:13,exploit:2,ext:13,extract:3,fals:[1,4,5,12,13],fast:13,featur:[5,6,8],file:8,file_:13,finegrainedsteppedlr:[0,9],first_match_break:12,fix_generator_argu:13,fixedinstancenorm1d:13,follow:8,form:5,former:[1,8,13],forward:[1,8,13],fp16:12,frac:[],from:[1,2,12,13],g_camid:12,g_pid:12,galleri:12,gallery_cam:12,gallery_id:12,gallery_imag:3,gamma:13,gan:[2,8],gaussian:2,gener:[0,2,5,8,9],generate_logg:13,generate_save_nam:13,get:5,get_lr:11,given:[2,5],gpu:[4,10,12],group:1,h_flip:4,hard:5,hard_min:5,hardest:5,has:[1,4,8,13],hat:13,here:13,hook:[1,8,13],how:2,i_shap:4,ident:[8,12],identif:2,ignor:[1,8,13],imag:[1,2,4,8,12],image_queri:3,image_test:3,image_train:3,imagenet:1,imes:13,img:4,in_plan:1,incept:8,increas:11,index:0,inform:8,ingredi:13,init:8,initi:[8,13],inplan:[1,8],input:[8,13],input_attent:1,inputattent:1,instanc:[1,4,8,13],instancenorm1d:13,instancenorm:13,instead:[1,8,13],invari:0,its:[12,13],itself:2,just:2,keep:13,kei:[12,13],kept:13,kernel_s:[1,8],key_transform:13,kwarg:[1,3,4,5,6,8,10,11],l2norm:13,label:[5,6],lambd:8,lambda:8,lambdalay:8,larger:1,last:1,last_epoch:11,last_strid:1,latent_dimens:8,latent_s:12,latentdiscrimin:8,latter:[1,8,13],launch:11,layer:[0,1,5,8,9],learn:[1,2,11],learnabl:13,leav:8,less:8,lime:5,limit:2,linear:8,list:11,load:[4,12],load_epoch:12,load_param:1,local:8,logger:12,logger_fil:12,logger_save_nam:13,logit:[5,6],logo:2,look:2,loss:[0,9],loss_fn:12,loss_funct:6,loss_kwarg:6,loss_lambda:6,loss_param:6,lr_bia:10,lr_mult:11,lr_op:11,lr_plu:11,lr_schedul:11,main:[0,9],map:8,margin:5,marginloss:[0,6,9],market1501:[3,12],market1501datacrawl:[0,9],math:[0,9],mathemat:13,mathrm:13,matrix:[5,13],max_rank:12,mean:[8,13],mean_ap:12,mention:2,method:5,metric:12,mileston:11,mine:5,mini:[5,13],miss:13,mnist:8,mode:[4,13],model:[0,1,2,9,10,12],model_build:8,model_save_fold:13,model_save_nam:12,modul:[0,9],momemtum:13,momentum:13,more:2,mtmcdatacrawl:[0,9],multi:2,multipl:11,must:8,n_channel:13,name:13,need:[1,2,8,13],neg:5,network:1,neural:1,none:[1,8,10,12,13],norm_lay:1,normal:[8,13],normalization_mean:4,normalization_scal:4,normalization_std:4,note:13,noth:8,notion:13,num_class:1,num_featur:13,number:[1,4,8],numer:13,object:[2,3,4,5,6,10,11,12,13],observ:13,occur:2,old:[2,13],old_kei:13,one:[1,8,13],ones:5,onli:[3,4,5,8,13],oper:11,operand:11,optim:[0,9,11,12,13],option:13,other:13,outer:1,output:[5,8,13],over:[5,13],overridden:[1,8,13],packag:[0,9],pad:8,page:0,pairwis:[5,13],pairwise_dist:13,paper:[8,13],param:1,paramet:[4,5,8,11,13],partial_load:8,pass:[1,8,13],path:[8,13],per:13,perform:[1,5,8,13],pictur:2,pixel:2,plane:[1,8],pool:8,posit:5,power:8,pre:1,preload:4,preload_class:4,pretrain:[1,8],previou:11,previous_lr:11,probe_imag:3,problem:2,process:8,progress:1,provid:[5,8],proxi:2,proxynca:5,proxyncaloss:[0,9],proxytripletloss:[0,9],q_camid:12,q_pid:12,queri:[3,4,12],query_cam:12,query_fold:3,query_id:12,query_to_gallery_dist:12,rac:13,radic:2,randn:13,rate:11,ratio:1,rea:4,recip:[1,8,13],recogn:2,recognit:[1,2],refer:8,regist:[1,8,13],reid:8,reiddatacrawl:[0,4,9],reidlossbuild:[0,5,9],reidmodel:8,reidoptimizerbuild:[0,9],rel:11,renam:13,rename_state_dict_kei:13,replace_stride_with_dil:1,reset_paramet:13,residu:1,resnet101:1,resnet152:1,resnet18:[1,8],resnet34:1,resnet50:[1,8],resnet:[0,8,9],resnetbas:[0,9],resnext101_32x8d:1,resnext50_32x4d:1,resnext:1,resolut:2,resum:11,retriev:4,rule:13,run:[1,8,13],running_mean:13,running_var:13,same:[1,8,12,13],sampler:4,save:[12,13],save_backup:12,save_directori:12,save_frequ:12,scalar:5,scale:[2,5,13],schedul:[0,9,12],search:0,secondary_attent:1,separ:13,separate_camera_set:12,sequencedgener:[0,9],set:[3,13],setup:[4,12],shape:[5,8,13],shift:2,should:[1,8,13],silent:[1,8,13],similar:[2,8],simpl:8,simpletrain:[0,9],sinc:[1,8,13],singl:8,single_gallery_shot:12,size:[5,13],slight:2,smooth:5,smoth:5,soft_dim:5,soft_dimens:8,softmarginloss:5,softmax:[5,8],softmaxlabelsmooth:[0,6,9],softmaxlogitsloss:[0,6,9],solut:2,some:2,sourc:13,spatial:8,spatialattent:1,specif:3,specifi:4,sqrt:13,squar:[5,13],stabil:13,standard:[5,8,13],state:[11,13],state_dict_path:13,statist:13,std:8,stderr:1,step:12,step_verbos:12,str:[4,5,8],stride:[1,8],string:[8,11],stuff:2,style:2,stylegan:2,styliz:13,sub:2,subclass:[1,8,13],submodul:[0,9],subpackag:[0,9],subtyp:8,support:[5,8],t_crop:4,take:[1,8,13],target:13,tdataset:4,team:8,tensor:5,test:4,test_fold:3,test_frequ:12,test_load:12,text:[],than:8,them:[1,8,13],ther:8,thi:[1,2,8,13],time:[],todo:8,top_onli:1,topk:12,torch:[1,4,5,8,11,13],torch_util:[0,9],track:13,track_running_stat:13,tradit:2,train:[1,2,4,11,12,13],train_fold:3,train_imag:3,train_load:12,trainer:[0,9],transform:[1,4],trigger:11,triplet:[4,5],triplet_loss:5,tripletloss:[0,6,9],tsampler:4,tupl:11,twice:1,type:[1,2,5,8],updat:[2,13],url:13,use:[2,4,5,8],used:[8,13],uses:[5,13],using:8,util:[0,4,9],vaae:8,vae:8,vae_gan:[0,9],vaegan:[0,9],vaegan_model:10,vaegan_model_build:8,vaeganoptimizerbuild:[0,9],vaegantrain:[0,9],val:11,valid:5,valid_label:4,valu:[8,13],varianc:13,vector:13,vehicl:[2,8],veri:[3,12],veri_model_build:8,view:12,vric:3,vricdatacrawl:[0,9],wai:13,web:[0,9],weight:[8,13],weight_bia:10,weight_decai:10,weight_init_norm:8,weights_init:8,weights_init_kaim:8,weights_init_softmax:8,weights_path:[1,8],when:[11,13],where:[8,13],whether:11,which:[1,13],wide:1,wide_resnet101_2:1,wide_resnet50_2:1,width_per_group:1,within:[1,8,13],without:13,worker:4,x_t:13,yet:8,yield:8,zero_init_residu:1},titles:["Welcome to EBKAFramework\u2019s documentation!","backbones package","carzam module","crawlers package","generators package","loss package","loss.builders package","main module","models package","Contextual Invariants","optimizer package","scheduler package","trainer package","utils package","vae_gan module"],titleterms:{"abstract":8,backbon:1,builder:6,cars196datacrawl:3,cars196gener:4,carzam:2,carzamresnet:8,classedcrawl:3,classedgener:4,content:[1,3,4,5,6,8,10,11,12,13],contextu:9,crawler:3,document:0,ebkaframework:0,finegrainedsteppedlr:11,gener:4,indic:0,invari:9,layer:13,loss:[5,6],main:7,marginloss:5,market1501datacrawl:3,math:13,model:8,modul:[1,2,3,4,5,6,7,8,10,11,12,13,14],mtmcdatacrawl:3,optim:10,packag:[1,3,4,5,6,8,10,11,12,13],proxyncaloss:5,proxytripletloss:5,reiddatacrawl:3,reidlossbuild:6,reidoptimizerbuild:10,resnet:1,resnetbas:8,schedul:11,sequencedgener:4,simpletrain:12,softmaxlabelsmooth:5,softmaxlogitsloss:5,submodul:[1,3,4,5,6,8,10,11,12,13],subpackag:5,tabl:0,torch_util:13,trainer:12,tripletloss:5,util:13,vae_gan:14,vaegan:8,vaeganoptimizerbuild:10,vaegantrain:12,vricdatacrawl:3,web:13,welcom:0}})